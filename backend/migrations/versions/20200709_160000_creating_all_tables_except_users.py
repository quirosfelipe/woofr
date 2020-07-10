"""creating all tables except users

Revision ID: 9b782fe3b264
Revises: 024cd7eeb371
Create Date: 2020-07-09 16:00:00.782746

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9b782fe3b264'
down_revision = '024cd7eeb371'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tagName', sa.String(length=40), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=True),
    sa.Column('photoName', sa.String(length=70), nullable=False),
    sa.Column('photoUrl', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('photoId', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['photoId'], ['photos.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('photo_tags',
    sa.Column('photoId', sa.Integer(), nullable=False),
    sa.Column('tagId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['photoId'], ['photos.id'], ),
    sa.ForeignKeyConstraint(['tagId'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('photoId', 'tagId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('photo_tags')
    op.drop_table('comments')
    op.drop_table('photos')
    op.drop_table('tags')
    # ### end Alembic commands ###
