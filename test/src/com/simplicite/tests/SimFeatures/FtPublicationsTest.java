package com.simplicite.tests.SimFeatures;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;

import com.simplicite.objects.SimFeatures.FtPublications;
import com.simplicite.util.Grant;

/**
 * Unit tests FtPublicationsTest
 */
public class FtPublicationsTest {

    private Grant getGrant() {
        return Grant.getSystemAdmin();
    } 

    @Test
    public void testPreSave() {
        FtPublications publicationDB = (FtPublications) getGrant().getTmpObject("FtPublications");
        publicationDB.setFieldValue("ftPubHtml", "<h1>Hello, World!</h1>");
        publicationDB.preSave();
        assertNotNull(publicationDB.getFieldValue("ftPubFile"));
    }
}
