from app import app
from app.models import db
from app.models.users import User
from app.models.photos import Photo
from app.models.comments import Comment

with app.app_context():
  db.drop_all()
  db.create_all()
  user1 = User(user_name='Elvis P',email='demo@example.com', password='pass1234')
  user2 = User(user_name='Will Smith',email='demo2@example.com', password='pass1234')

  photo1 = Photo(userId=1, description='This puppy is so cute', photoName='We all love puppies',photoUrl='https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Puppy-names-772155.jpg')
  photo2 = Photo(userId=1, description='I wish I had one', photoName='Adorable',photoUrl='https://image.oregonlive.com/home/olive-media/width600/img/today/photo/puppy-3181325-1280jpg-e3cb7db994321585.jpg')
  photo3 = Photo(userId=1, description='Those eyes', photoName='We all love puppies',photoUrl='https://tailandfur.com/wp-content/uploads/2015/04/Puppy-Pictures-to-make-you-say-Awwww2.jpg')
  photo4 = Photo(userId=1, description='This puppy is beautiful', photoName='maybe tomorrow',photoUrl='https://cdn2-www.dogtime.com/assets/uploads/2015/05/file_21702_impossibly-cute-puppy-30.jpg')
  photo5 = Photo(userId=2, description='I want it', photoName='Maybe today',photoUrl='https://i.ytimg.com/vi/9ZcK1oLHNGI/hqdefault.jpg')
  photo6 = Photo(userId=2, description='Excelent breed', photoName='so sweet',photoUrl='https://assets3.thrillist.com/v1/image/2799859/size/tmg-article_default_mobile.jpg')
  photo7 = Photo(userId=2, description='How smart', photoName='We all love puppies',photoUrl='http://3.bp.blogspot.com/-STQB6m94pjA/UKh3G88eyGI/AAAAAAAABbE/XTu3SBtpwWo/s1600/German_Shepherd-Puppy.jpg')
  photo8 = Photo(userId=2, description="I'd take it with me", photoName='so adorable',photoUrl='https://3c918j3kwt6a3vrcmw3irl7u-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/german-shepherd-puppies-4.jpg')

  comment1 = Comment(userId=1, photoId=1, comment='How lovely')
  comment2 = Comment(userId=1, photoId=3, comment='Impossible not to love him')
  comment3 = Comment(userId=1, photoId=5, comment='We love dogs')
  comment4 = Comment(userId=1, photoId=7, comment='Cute!')
  comment5 = Comment(userId=2, photoId=2, comment='nice looking dog')
  comment6 = Comment(userId=2, photoId=4, comment='I need to pet him')
  comment7 = Comment(userId=2, photoId=6, comment='We love dogs')
  comment8 = Comment(userId=2, photoId=8, comment='How lovely!!')
  comment9 = Comment(userId=1, photoId=2, comment='How lovely')
  comment10 = Comment(userId=1, photoId=4, comment='Impossible not to love him')
  comment11 = Comment(userId=1, photoId=6, comment='We love dogs')
  comment12 = Comment(userId=1, photoId=8, comment='Cute!')
  comment13 = Comment(userId=2, photoId=1, comment='nice looking dog')
  comment14 = Comment(userId=2, photoId=3, comment='I need to pet him')
  comment15 = Comment(userId=2, photoId=5, comment='We love dogs')
  comment16 = Comment(userId=2, photoId=7, comment='How lovely')


  db.session.add(user1)
  db.session.add(user2)
  db.session.add(photo1)
  db.session.add(photo2)
  db.session.add(photo3)
  db.session.add(photo4)
  db.session.add(photo5)
  db.session.add(photo6)
  db.session.add(photo7)
  db.session.add(photo8)


  db.session.add(comment1)
  db.session.add(comment2)
  db.session.add(comment3)
  db.session.add(comment4)
  db.session.add(comment5)
  db.session.add(comment6)
  db.session.add(comment7)
  db.session.add(comment8)
  db.session.add(comment9)
  db.session.add(comment10)
  db.session.add(comment11)
  db.session.add(comment12)
  db.session.add(comment13)
  db.session.add(comment14)
  db.session.add(comment15)
  db.session.add(comment16)


  db.session.commit()
