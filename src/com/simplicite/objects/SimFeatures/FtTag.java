package com.simplicite.objects.SimFeatures;

import com.simplicite.util.ObjectDB;
import com.simplicite.util.AppLog;

public class FtTag extends ObjectDB {
    private static final long serialVersionUID = 1L;

    @Override
    public void initRefSelect(ObjectDB parent) {
        AppLog.info("parent.getName() : "+parent.getName(),null);
        AppLog.info("Ref field: "+getParentObjectRefField(),null);
        setPluralDisplay("Tags from initRefSelect");
    }
}
