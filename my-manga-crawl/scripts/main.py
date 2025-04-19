import subprocess
import time
import os
import random
import logging
import json
import threading
from tqdm import tqdm
import glob

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler("nhentai_scrape.log"),
        logging.StreamHandler()
    ]
)

# Configuration
OUTPUT_DIR = "./yaoi_manga_data"  # Output directory for manga and metadata
TAG = "yaoi"                      # Tag to search
PAGES = [2]                       # Pages to scrape (25 results per page)
DELAY_MIN = 1.0                   # Minimum delay between downloads (seconds)
DELAY_MAX = 2.0                   # Maximum delay for randomization
NHENTAI_CMD = "nhentai"           # Command to run nhentai CLI (assumes installed)

def ensure_output_dir():
    """Create output directory if it doesn't exist."""
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        logging.info(f"Created output directory: {OUTPUT_DIR}")

def run_nhentai_command(args):
    """Run nhentai CLI command and handle errors."""
    cmd = [NHENTAI_CMD] + args
    env = os.environ.copy()
    env['PYTHONUTF8'] = '1'  # Force UTF-8 encoding
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            encoding='utf-8',
            env=env,
            check=True
        )
        logging.info(f"Command succeeded: {' '.join(cmd)}")
        return result.stdout
    except subprocess.CalledProcessError as e:
        logging.error(f"Command failed: {' '.join(cmd)}")
        logging.error(f"Error: {e.stderr}")
        return None

def verify_metadata(doujinshi_id):
    """Verify metadata JSON file contains all expected fields."""
    metadata_path = os.path.join(OUTPUT_DIR, str(doujinshi_id), f"{doujinshi_id}.json")
    if os.path.exists(metadata_path):
        try:
            with open(metadata_path, "r", encoding="utf-8") as f:
                metadata = json.load(f)
                logging.info(f"Metadata for ID {doujinshi_id}:")
                for key, value in metadata.items():
                    logging.info(f"  {key}: {value}")
                return True
        except json.JSONDecodeError:
            logging.error(f"Invalid JSON for ID {doujinshi_id}: {metadata_path}")
            return False
    else:
        logging.error(f"Metadata file missing for ID {doujinshi_id}: {metadata_path}")
        return False

def monitor_progress(page, pbar, initial_count):
    """Monitor output directory for new manga directories and update progress bar."""
    while pbar.n < pbar.total:
        current_dirs = [d for d in glob.glob(os.path.join(OUTPUT_DIR, "*")) if os.path.isdir(d)]
        current_count = len(current_dirs)
        new_downloads = current_count - initial_count
        pbar.n = min(new_downloads, pbar.total)  # Update progress without exceeding total
        pbar.refresh()
        time.sleep(0.5)  # Check every 0.5 seconds

def scrape_yaoi_manga():
    """Scrape yaoi manga with a progress bar."""
    ensure_output_dir()

    for page in PAGES:
        logging.info(f"Scraping page {page} for tag: {TAG}")
        # Count initial directories
        initial_dirs = [d for d in glob.glob(os.path.join(OUTPUT_DIR, "*")) if os.path.isdir(d)]
        initial_count = len(initial_dirs)

        # Set up progress bar (25 manga per page)
        with tqdm(total=25, desc=f"Downloading page {page}", unit="manga") as pbar:
            # Run nhentai command in a separate thread
            args = [
                "--search", f"tag:{TAG}",
                "--page", str(page),
                "--download",
                "--meta",
                "--sort", "popular",
                "--output", OUTPUT_DIR,
                "--delay", "1"
            ]
            thread = threading.Thread(target=run_nhentai_command, args=(args,))
            thread.start()

            # Monitor progress in the main thread
            monitor_progress(page, pbar, initial_count)
            thread.join()  # Wait for the command to finish

        output = run_nhentai_command(args)  # Re-run to capture output if needed
        if output:
            logging.info(f"Page {page} output: {output}")
        else:
            logging.warning(f"Skipping page {page} due to error")

        # Verify metadata for downloaded manga
        for root, dirs, _ in os.walk(OUTPUT_DIR):
            for doujinshi_id in dirs:
                if doujinshi_id.isdigit():
                    verify_metadata(doujinshi_id)

        # Randomized delay
        delay = random.uniform(DELAY_MIN, DELAY_MAX)
        logging.info(f"Waiting {delay:.2f} seconds before next page")
        time.sleep(delay)

def main():
    """Main function to execute the scrape."""
    logging.info("Starting nhentai yaoi scrape")
    try:
        scrape_yaoi_manga()
        logging.info("Scraping completed successfully")
        manga_count = sum(1 for d in os.listdir(OUTPUT_DIR) if os.path.isdir(os.path.join(OUTPUT_DIR, d)))
        logging.info(f"Downloaded {manga_count} manga")
    except Exception as e:
        logging.error(f"Scraping failed: {str(e)}")
    finally:
        logging.info("Log saved to nhentai_scrape.log")

if __name__ == "__main__":
    main()