# Flask Hello World Web Application

## Overview
This is a simple Flask web application that displays "hello world" on the home page. The project was imported from GitHub and configured to run in the Replit environment.

## Recent Changes (October 13, 2025)
- Installed Python 3.11 and Flask framework
- Added gunicorn for production deployment
- Configured app to run on 0.0.0.0:5000 with debug mode enabled
- Created requirements.txt for dependency management
- Set up Flask App workflow for development
- Configured autoscale deployment with gunicorn
- Added .gitignore for Python project

## Project Architecture
### Structure
- `app.py` - Main Flask application file with a single route
- `requirements.txt` - Python dependencies (auto-generated from pyproject.toml)
- `pyproject.toml` - Python project configuration (managed by uv)
- `.gitignore` - Git ignore file for Python projects

### Tech Stack
- **Framework**: Flask 3.1.2
- **Language**: Python 3.11
- **Development Server**: Flask development server (debug mode)
- **Production Server**: Gunicorn 23.0.0
- **Package Manager**: uv (Replit's Python package manager)

### Configuration
- **Development**: Runs on 0.0.0.0:5000 with debug mode enabled
- **Deployment**: Autoscale deployment using gunicorn on port 5000
- **Workflow**: Flask App workflow runs `python app.py`

## User Preferences
None documented yet.
