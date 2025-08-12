from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class RecipeForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(), Length(max=100)])
    category = SelectField('Category', choices=[('Breakfast', 'Breakfast'), 
                                                 ('Lunch', 'Lunch'), 
                                                 ('Dinner', 'Dinner'), 
                                                 ('Snack', 'Snack')], 
                           validators=[DataRequired()])
    ingredients = TextAreaField('Ingredients', validators=[DataRequired()])
    instructions = TextAreaField('Instructions', validators=[DataRequired()])
    prep_time = IntegerField('Preparation Time (minutes)', 
                             validators=[DataRequired(), NumberRange(min=1)])
    cook_time = IntegerField('Cooking Time (minutes)', 
                             validators=[DataRequired(), NumberRange(min=1)])
    serving_size = IntegerField('Serving Size', 
                                 validators=[DataRequired(), NumberRange(min=1)])
    difficulty = SelectField('Difficulty Level', choices=[('Easy', 'Easy'), 
                                                           ('Medium', 'Medium'), 
                                                           ('Hard', 'Hard')], 
                             validators=[DataRequired()])
    submit = SubmitField('Submit Recipe')