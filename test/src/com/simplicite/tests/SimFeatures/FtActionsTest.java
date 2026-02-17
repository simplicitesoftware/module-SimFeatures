package com.simplicite.tests.SimFeatures;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;

import org.junit.Test;

import com.simplicite.objects.SimFeatures.FtActions;
import com.simplicite.util.Action;
import com.simplicite.util.DocumentDB;
import com.simplicite.util.Grant;
import com.simplicite.util.ObjectField;

/**
 * Unit tests FtActionsTest
 */
public class FtActionsTest {

	private Grant getGrant() {
		return Grant.getSystemAdmin();
	} 

	@Test
	public void testInitAction() {
		FtActions actionDB = (FtActions) getGrant().getTmpObject("FtActions");
		Action action = actionDB.getAction("ActAskFields");


		actionDB.setFieldValue("ftActDate", "");
		actionDB.initAction(action);
		// Ensure ftActDate2 is reset if ftActDate is empty and test expected outcome
		ObjectField date2 = action.getConfirmField("ftActDate2");
		assertEquals("Date2 should be empty when ftActDate is empty", "", date2.getDefaultValue());
		assertTrue("Date2 should be required when ftActDate is empty", date2.isRequired());

		actionDB.setFieldValue("ftActDate", "2026-01-01");
		actionDB.initAction(action);
		
		date2 = action.getConfirmField("ftActDate2");
		assertEquals("Date2 should be 2026-01-08", "2026-01-08", date2.getDefaultValue());
		assertFalse("Date2 should not be required", date2.isRequired());

		Action action2 = actionDB.getAction("ActConfirmFields");
		actionDB.initAction(action2);
		
	}

	@Test
	public void testConfirmAction() {
		FtActions actionDB = (FtActions) getGrant().getTmpObject("FtActions");
		String msg = actionDB.confirmAction(null);
		assertTrue("Result should contain 'confirmAction is done'", msg.contains("confirmAction is done"));
	}
	
	@Test
	public void testAskAction() throws Exception {
		FtActions actionDB = (FtActions) getGrant().getTmpObject("FtActions");
		Action action = actionDB.getAction("ActAskFields");
		
		action.getConfirmField("ftActDate2").setValue("2026-02-16");
		action.getConfirmField("ftActUserId").setValue("1");
		action.getConfirmField("ftActUserId.usr_last_name").setValue("Doe");

		// Create a dummy file for testing
		File dummyFile = new File("test.txt");
		File dummyImage = new File("test.jpg");
		try {
			// Actually create the dummy file (it will be empty)
			if (!dummyFile.exists()) {
				boolean created = dummyFile.createNewFile();
				assertTrue("Dummy file should be created", created || dummyFile.exists());
			}
			if (!dummyImage.exists()) {
				boolean created = dummyImage.createNewFile();
				assertTrue("Dummy image should be created", created || dummyImage.exists());
			}
			ObjectField docField = action.getConfirmField("ftActDocument2");
			DocumentDB document = new DocumentDB(false);
			document.setUploadFile(dummyFile);
			document.setPath("test.txt");
			docField.setDocument(document);

			ObjectField imageField = action.getConfirmField("ftActImage2");
			DocumentDB image = new DocumentDB(false);
			image.setUploadFile(dummyImage);
			image.setBytes(new byte[0]);
			image.setPath("test.jpg");
			imageField.setDocument(image);

			String result = actionDB.askAction(action);
			assertNotNull(result);

			assertTrue("Result should contain 'askAction is done with confirmed values'", result.contains("askAction is done with confirmed values"));
			assertTrue("Result should contain 'date = 2026-02-16'", result.contains("date = 2026-02-16"));
			assertTrue("Result should contain 'user id = 1'", result.contains("user id = 1"));
			assertTrue("Result should contain 'last name = Doe'", result.contains("last name = Doe"));
			assertTrue("Result should contain 'doc name = test.txt'", result.contains("doc name = test.txt"));
			assertTrue("Result should contain 'file size = 0'", result.contains("file size = 0"));
			assertTrue("Result should contain 'img name = test.jpg'", result.contains("img name = test.jpg"));
			assertTrue("Result should contain 'data size = 0'", result.contains("data size = 0"));
		} finally {
			// Clean up: delete the dummy file after the test if it still exists
			if (dummyFile.exists()) {
				dummyFile.delete();
			}
			if (dummyImage.exists()) {
				dummyImage.delete();
			}
		}
	}
}
