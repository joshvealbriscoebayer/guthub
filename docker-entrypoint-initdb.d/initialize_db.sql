CREATE TABLE users (
	email				varchar(80) PRIMARY KEY,
	followers			varchar(80)[],
	following			varchar(80)[],
    password            varchar(80)
);

INSERT INTO users (email, password, following, followers)
    VALUES ('josh.veal-briscoe.ext@bayer.com', 'password', ARRAY[]::varchar(80)[], ARRAY[]::varchar(80)[]);

INSERT INTO users (email, password, following, followers)
    VALUES ('trevor.mccasland1.ext@bayer.com', 'password', ARRAY[]::varchar(80)[], ARRAY[]::varchar(80)[]);
