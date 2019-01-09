create schema gigs2

create table gigs2.gig (
  id            serial primary key,
  title         text,
  technologies  text,
  description   text,
  budget        text,
  contact_email text
);
