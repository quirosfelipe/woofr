-- DELETE FROM comments;
-- DELETE FROM photo_tags;
-- DELETE FROM photos;
-- DELETE FROM tags;
-- DELETE FROM users;

-- INSERT INTO users (user_name,email, hashed_password)
-- VALUES
--   ('Elvis P','demo@example.com', 'pbkdf2:sha256:150000$LUsvVJy4$62d9b4a74aa8d487fc42f84417c0082c1532e28f052d3c588e731dd6331ee9d8');
--   ('Will Smith','demo2@example.com', 'pbkdf2:sha256:150000$LUsvVJy4$62d9b4a74aa8d487fc42f84417c0082c1532e28f052d3c588e731dd6331ee9d8');


-- INSERT INTO photos (userId, description, photoName, photoUrl)
-- VALUES
--   (1, 'This puppy is so cute', 'We all love puppies', 'https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/Puppy-names-772155.jpg'),
--   (1, 'I wish I had one', 'Adorable', 'https://image.oregonlive.com/home/olive-media/width600/img/today/photo/puppy-3181325-1280jpg-e3cb7db994321585.jpg'),
--   (1, 'Those eyes', 'We all love puppies', 'https://tailandfur.com/wp-content/uploads/2015/04/Puppy-Pictures-to-make-you-say-Awwww2.jpg'),
--   (1, 'This puppy is beautiful', 'maybe tomorrow', 'https://cdn2-www.dogtime.com/assets/uploads/2015/05/file_21702_impossibly-cute-puppy-30.jpg'),
--   (2, 'I want it', 'Maybe today', 'https://i.ytimg.com/vi/9ZcK1oLHNGI/hqdefault.jpg'),
--   (2, 'Excelent breed', 'so sweet', 'https://assets3.thrillist.com/v1/image/2799859/size/tmg-article_default_mobile.jpg'),
--   (2, 'How smart', 'We all love puppies', 'http://3.bp.blogspot.com/-STQB6m94pjA/UKh3G88eyGI/AAAAAAAABbE/XTu3SBtpwWo/s1600/German_Shepherd-Puppy.jpg'),
--   (2, "I'd take it with me", 'so adorable', 'https://3c918j3kwt6a3vrcmw3irl7u-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/german-shepherd-puppies-4.jpg')


-- INSERT INTO comments (userId, photoId,comment)
-- VALUES
--   (1, 1,'How lovely'),
--   (1, 3,'Impossible not to love him'),
--   (1, 5,'We love dogs'),
--   (1, 7,'Cute!'),
--   (2, 2,'nice looking dog'),
--   (2, 4,'I need to pet him'),
--   (2, 6,'We love dogs'),
--   (2, 8,'How lovely!!'),
--   (1, 2,'How lovely'),
--   (1, 4,'Impossible not to love him'),
--   (1, 6,'We love dogs'),
--   (1, 8,'Cute!'),
--   (2, 1,'nice looking dog'),
--   (2, 3,'I need to pet him'),
--   (2, 5,'We love dogs'),
--   (2, 7,'How lovely'),
