insert into people (pname,psurname,major,mail,photo_url,password)
values ('sarp','ozdemir','ISE','sarp1999@gmail.com','tbd','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');

insert into topics (class_name,class_desc,credits)
values ('SRP100','sarp ilk sene',33);

insert into topics (class_name,class_desc,credits)
values ('SRP101','sarp ikinci sene ilk donem',18);

insert into classes (c_class_name,c_teacher_id)
values ('SRP100',1);

insert into classes (c_class_name,c_teacher_id)
values ('SRP101',1);

insert into enrollment (student_id,crn)
values (
(select person_id from people where mail = 'sarp1999@gmail.com'),
(select crn from classes where c_class_name = 'SRP100')
);

insert into enrollment (student_id,crn)
values (
(select person_id from people where mail = 'sarp1999@gmail.com'),
(select crn from classes where c_class_name = 'SRP101')
);

update classes set created_at = '2020-05-30 20:26:38' where c_class_name like  'SRP%';

INSERT INTO grades (student_id , grade, crn)
VALUES 
(
(select person_id from people where mail = 'sarp1999@gmail.com'),
'BB',
(select crn from classes where c_class_name = 'SRP100')
); 

INSERT INTO grades (student_id , grade, crn)
VALUES 
(
(select person_id from people where mail = 'sarp1999@gmail.com'),
'AA',
(select crn from classes where c_class_name = 'SRP101')
); 