CREATE TABLE users (
    password            varchar(80),
	email				varchar(80),
	following			varchar(80)[],
	followers			varchar(80)[]
);

INSERT INTO users (email, password, following, followers)
    VALUES ('trevor.mccasland1.ext@bayer.com', 'password', ARRAY[]::varchar(80)[], ARRAY[]::varchar(80)[]);

INSERT INTO users (email, password, following, followers)
    VALUES ('trevor.mccasland1.ext@bayer.com', 'password', ARRAY[]::varchar(80)[], ARRAY[]::varchar(80)[]);
