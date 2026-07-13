# Web Based FRST Log Cleaner

This tool is a web-based port of a forked Python script originally created by [SkeletalDemise](https://github.com/SkeletalDemise/FRST_log_cleaner)

The logic was ported to JavaScript so you can clean logs from anywhere without carrying a script around.

## How It Works

1. Upload **FRST.txt** and **Addition.txt**
2. The tool removes lines containing known clean strings (*browser extensions, legitimate software vendors, etc.*)
3. Matching lines are removed from the cleaned logs and saved into a separate file so they can still be reviewed

## Output Files

- **FRST_Cleaned.txt** & **Addition_Cleaned.txt** - Cleaned logs ready for analysis
- **Whitelisted_Strings.txt** - Contains all of the removed clean entries
