-- Shared SQL CleanTestAppUser
delete from m_user_sysparam where usp_user_id=(select row_id from m_user where usr_login='user');
delete from m_session where ses_user_id=(select row_id from m_user where usr_login='user');
delete from m_object_usage where obu_user_id=(select row_id from m_user where usr_login='user');