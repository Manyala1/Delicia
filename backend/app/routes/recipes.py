from flask import Blueprint, request, jsonify
from app.models import Recipe, db
from app.forms import RecipeForm

recipes_bp = Blueprint('recipes', __name__)

@recipes_bp.route('/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipe.query.all()
    return jsonify([recipe.to_dict() for recipe in recipes]), 200

@recipes_bp.route('/recipes/<int:recipe_id>', methods=['GET'])
def get_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    return jsonify(recipe.to_dict()), 200

@recipes_bp.route('/recipes', methods=['POST'])
def add_recipe():
    form = RecipeForm()
    if form.validate_on_submit():
        recipe = Recipe(
            title=form.title.data,
            ingredients=form.ingredients.data,
            instructions=form.instructions.data,
            category=form.category.data,
            prep_time=form.prep_time.data,
            cook_time=form.cook_time.data,
            serving_size=form.serving_size.data,
            difficulty=form.difficulty.data
        )
        db.session.add(recipe)
        db.session.commit()
        return jsonify(recipe.to_dict()), 201
    return jsonify(form.errors), 400

@recipes_bp.route('/recipes/<int:recipe_id>', methods=['PUT'])
def edit_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    form = RecipeForm()
    if form.validate_on_submit():
        recipe.title = form.title.data
        recipe.ingredients = form.ingredients.data
        recipe.instructions = form.instructions.data
        recipe.category = form.category.data
        recipe.prep_time = form.prep_time.data
        recipe.cook_time = form.cook_time.data
        recipe.serving_size = form.serving_size.data
        recipe.difficulty = form.difficulty.data
        db.session.commit()
        return jsonify(recipe.to_dict()), 200
    return jsonify(form.errors), 400

@recipes_bp.route('/recipes/<int:recipe_id>', methods=['DELETE'])
def delete_recipe(recipe_id):
    recipe = Recipe.query.get_or_404(recipe_id)
    db.session.delete(recipe)
    db.session.commit()
    return jsonify({'message': 'Recipe deleted successfully'}), 204