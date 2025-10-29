package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;

/**
 * Business object FtCustomUser
 */
public class FtCustomUser extends com.simplicite.objects.System.SimpleUser {
    private static final long serialVersionUID = 1L;
    
    @Override
    public void postLoad() {
        super.postLoad();
        // hide most of the SimpleUser fields, keeping only email & login
        getField("usr_first_name").setVisibility(ObjectField.VIS_HIDDEN);
        getField("usr_last_name").setVisibility(ObjectField.VIS_HIDDEN);
        getField("usr_image_id").setVisibility(ObjectField.VIS_HIDDEN);
        //getField("usr_email").setVisibility(ObjectField.VIS_HIDDEN);
        getField("usr_lang").setVisibility(ObjectField.VIS_HIDDEN);
        getField("usr_cell_num").setVisibility(ObjectField.VIS_HIDDEN);
        getField("usr_active").setVisibility(ObjectField.VIS_HIDDEN);
        getField("usr_home_id").setVisibility(ObjectField.VIS_HIDDEN);
        getField("row_module_id").setVisibility(ObjectField.VIS_HIDDEN);
        
        // hide all users that were not created throught this object
        setDefaultSearchSpec("ft_usr_type is not null");

        //hide states menu
        setMenuStates(false);
    }
    
    @Override
    public List<String> preValidate() {
        // set some mandatory SimpleUser fields
        setFieldValue("row_module_id", ModuleDB.getModuleId("ApplicationUsers"));
        //following does not work because usr_menu is not part of SimpleUser
        // we manage it in a postSave query to avoid adding a useless object attribute
        //setFieldValue("usr_menu", "1");
        setFieldValue("usr_active", Grant.USER_ACTIVE);
        
        return super.preValidate();
    }
    
    @Override
    public String postSave() {
		autoRespAttribution(getRowId(),getFieldValue("ftUsrType"));
        
        // meh practice... query instead of adding usr_menu attribute to objet
        getGrant().update("update m_user set usr_menu='1' where row_id="+getRowId());
        return super.postSave();
    }
    
    /**
     * customise depending on specific business rules, 
     */
    private static void autoRespAttribution(String userId, String userType){
    	List<String> groups = new ArrayList();
        switch(userType){
            case "FT_ADMIN": groups.add("FT_ADMIN"); break;
            case "FT_READ": groups.add("FT_READ"); break;
        }
        setRespList(userId,groups);
    }
    
    private static void setRespList(String userId, List<String> newGroupsList){
        List<String> oldGroupsList = getRespList(userId);
        // remove old unused groups
        for(String oldGroup : oldGroupsList)
            if(!newGroupsList.contains(oldGroup))
                Grant.removeResponsibility(userId, oldGroup);
        // add new missing groups
        for(String newGroup : newGroupsList)
            if(!oldGroupsList.contains(newGroup))
                Grant.addResponsibility(userId, newGroup, Tool.getCurrentDate(), null, true, "ApplicationUsers");
    }
    
    private static List<String> getRespList(String userId){
        if(Tool.isEmpty(userId))
            return null;
        Grant g = Grant.getSystemAdmin();
        String[] groups = g.queryFirstColumn("select distinct g.grp_name from m_resp r inner join m_group as g on r.rsp_group_id=g.row_id where r.rsp_login_id="+userId);
        return groups!=null && groups.length>0 ? Arrays.asList(groups) : new ArrayList<String>();
    }
}
