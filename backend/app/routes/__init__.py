from flask import Blueprint

# Initialize the blueprint for routes
routes_bp = Blueprint('routes', __name__)

from .recipes import *  # Import all routes from the recipes module