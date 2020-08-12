--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: woofr
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO woofr;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: woofr
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "photoId" integer NOT NULL,
    comment character varying(500)
);


ALTER TABLE public.comments OWNER TO woofr;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: woofr
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO woofr;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: woofr
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: photo_tags; Type: TABLE; Schema: public; Owner: woofr
--

CREATE TABLE public.photo_tags (
    "photoId" integer NOT NULL,
    "tagId" integer NOT NULL
);


ALTER TABLE public.photo_tags OWNER TO woofr;

--
-- Name: photos; Type: TABLE; Schema: public; Owner: woofr
--

CREATE TABLE public.photos (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    description character varying(200),
    "photoName" character varying(70) NOT NULL,
    "photoUrl" character varying NOT NULL
);


ALTER TABLE public.photos OWNER TO woofr;

--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: woofr
--

CREATE SEQUENCE public.photos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photos_id_seq OWNER TO woofr;

--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: woofr
--

ALTER SEQUENCE public.photos_id_seq OWNED BY public.photos.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: woofr
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    "tagName" character varying(40) NOT NULL
);


ALTER TABLE public.tags OWNER TO woofr;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: woofr
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO woofr;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: woofr
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: woofr
--

CREATE TABLE public.users (
    id integer NOT NULL,
    user_name character varying(30) NOT NULL,
    email character varying(255) NOT NULL,
    hashed_password character varying(128) NOT NULL
);


ALTER TABLE public.users OWNER TO woofr;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: woofr
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO woofr;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: woofr
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.photos ALTER COLUMN id SET DEFAULT nextval('public.photos_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: woofr
--

COPY public.alembic_version (version_num) FROM stdin;
9b782fe3b264
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: woofr
--

COPY public.comments (id, "userId", "photoId", comment) FROM stdin;
13	4	9	Someone remind me of the breed of this cat .... anyway looks like a dog
14	5	9	check out this  https://dogtime.com/dog-breeds/profiles
12	2	9	 pretty sure this is a cow
26	1	11	Cute dog
27	5	14	This dog is a king
29	2	11	Amazing pup!
35	4	10	this is a horse!
38	2	9	What a cute lizard!
39	1	15	What are you looking at???
\.


--
-- Data for Name: photo_tags; Type: TABLE DATA; Schema: public; Owner: woofr
--

COPY public.photo_tags ("photoId", "tagId") FROM stdin;
\.


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: woofr
--

COPY public.photos (id, "userId", description, "photoName", "photoUrl") FROM stdin;
10	1	Like father like son	photoname test	https://cf.ltkcdn.net/dogs/images/slide/90606-609x788-Playful_Pitbull_pups.jpg
11	1	I hope for one sunny day	photoname test	https://cdn.thinglink.me/api/image/707645661801086977/1240/10/scaletowidth
14	1	What a nice day wooooof	photoname test	https://allbigdogbreeds.com/wp-content/gallery/great-dane-puppies/Great-Dane-puppy-1.jpg
15	2	today they told me I could be a dog model, what do you think? ...I 'd rather be Elvis's dog.	photoname test	https://s.yimg.com/ny/api/res/1.2/eYBjF68h6WfuEZtLmHhc9Q--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/news.mashable/4393e9c3033e5be9941b86faa7e865c1
19	4	I love being a doggy!!	photoname test	https://onedoglove.files.wordpress.com/2013/02/german_shepherd_puppy3.jpg
18	2	I am think' I like cats!	photoname test	https://cdn.thinglink.me/api/image/707645661801086977/1240/10/scaletowidth
21	4	I want to watch Scooby Doo tonight	photoname test	https://cdn.lolwot.com/wp-content/uploads/2016/03/10-of-the-most-expensive-dog-breeds-in-the-world-8.jpg
17	2	woooooooooooffffffff day!!	photoname test	https://www.rover.com/blog/wp-content/uploads/2014/08/boston-terrier-handsome-683x540.jpg
16	2	i am the dog of the king . Period.	photoname test	https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/09/16a8709e8cd8d3790f1f22afbd77878c.jpg
22	4	have a nice weeeeeeek wooofr	photoname test	https://s.yimg.com/ny/api/res/1.2/eYBjF68h6WfuEZtLmHhc9Q--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/news.mashable/4393e9c3033e5be9941b86faa7e865c1
13	1	The best concerts of our lives..... want a treat??	photoname test	https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1
20	4	I am in doggy mode today!!!!!	photoname test	https://assets.entrepreneur.com/content/3x2/1300/20151218153624-puppies-cute-litter-terrier-bed-adoption-sleeping-friendships-cuddly-canine-pet-happy.jpeg
9	1	Am I looking good for this, right?	photoname test	https://static.wixstatic.com/media/308209_f3fe2ef34c3142188da6ee94a523cd2f~mv2_d_1711_1396_s_2.jpg
12	1	looks like Rex!!	photoname test	https://onedoglove.files.wordpress.com/2013/02/german_shepherd_puppy3.jpg
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: woofr
--

COPY public.tags (id, "tagName") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: woofr
--

COPY public.users (id, user_name, email, hashed_password) FROM stdin;
2	Demo2	demo2@example.com	pbkdf2:sha256:150000$kh1UjVJa$d6f9c0666c16d497467ae37b68866285cc185670871f7e7e008455b7f5139689
4	Demo3	demo3@example.com	pbkdf2:sha256:150000$d7fRNtA4$6a3d4e266decb59356fa378200b6ef870e5964732b716e4c7a89077b463e9f3e
5	Demo4	demos@example.com	pbkdf2:sha256:150000$fUnRTHUN$c3cd47426fa972a40bd89498fb42ff21869f078b3a1c03ea526645d50f89780f
1	Elvis	demo@example.com	pbkdf2:sha256:150000$LUsvVJy4$62d9b4a74aa8d487fc42f84417c0082c1532e28f052d3c588e731dd6331ee9d8
6	test	demo@example12.com	pbkdf2:sha256:150000$LRM4DgpL$bc9780eda6e48890eb538eadfb99c3404c8ea60fe81e39542acffa3e0a12c788
7	janka	janka@example.com	pbkdf2:sha256:150000$3ZiooPAn$c27867702a22e2639dd7c07135629f934bec22379fe2c92f94b7c19d8c6d647e
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: woofr
--

SELECT pg_catalog.setval('public.comments_id_seq', 39, true);


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: woofr
--

SELECT pg_catalog.setval('public.photos_id_seq', 22, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: woofr
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: woofr
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: photo_tags photo_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.photo_tags
    ADD CONSTRAINT photo_tags_pkey PRIMARY KEY ("photoId", "tagId");


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_user_name_key; Type: CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_name_key UNIQUE (user_name);


--
-- Name: comments comments_photoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES public.photos(id);


--
-- Name: comments comments_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: photo_tags photo_tags_photoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.photo_tags
    ADD CONSTRAINT "photo_tags_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES public.photos(id);


--
-- Name: photo_tags photo_tags_tagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.photo_tags
    ADD CONSTRAINT "photo_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES public.tags(id);


--
-- Name: photos photos_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: woofr
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT "photos_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

