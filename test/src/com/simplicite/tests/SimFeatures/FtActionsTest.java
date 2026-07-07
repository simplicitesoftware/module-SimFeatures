package com.simplicite.tests.SimFeatures;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.File;

import org.junit.jupiter.api.Test;

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
		assertEquals( "", date2.getDefaultValue(), "Date2 should be empty when ftActDate is empty");
		assertTrue(date2.isRequired(), "Date2 should be required when ftActDate is empty");

		actionDB.setFieldValue("ftActDate", "2026-01-01");
		actionDB.initAction(action);
		
		date2 = action.getConfirmField("ftActDate2");
		assertEquals( "2026-01-08", date2.getDefaultValue(), "Date2 should be 2026-01-08");
		assertFalse(date2.isRequired(), "Date2 should not be required");

		Action action2 = actionDB.getAction("ActConfirmFields");
		actionDB.initAction(action2);
		
	}

	@Test
	public void testConfirmAction() {
		FtActions actionDB = (FtActions) getGrant().getTmpObject("FtActions");
		String msg = actionDB.confirmAction(null);
		assertTrue(msg.contains("confirmAction is done"), "Result should contain 'confirmAction is done'");
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
				assertTrue(created || dummyFile.exists(), "Dummy file should be created");
			}
			if (!dummyImage.exists()) {
				boolean created = dummyImage.createNewFile();
				assertTrue(created || dummyImage.exists(), "Dummy image should be created");
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

			assertTrue(result.contains("askAction is done with confirmed values"), "Result should contain 'askAction is done with confirmed values'");
			assertTrue(result.contains("date = 2026-02-16"), "Result should contain 'date = 2026-02-16'");
			assertTrue(result.contains("user id = 1"), "Result should contain 'user id = 1'");
			assertTrue(result.contains("last name = Doe"), "Result should contain 'last name = Doe'");
			assertTrue(result.contains("doc name = test.txt"), "Result should contain 'doc name = test.txt'");
			assertTrue(result.contains("file size = 0"), "Result should contain 'file size = 0'");
			assertTrue(result.contains("img name = test.jpg"), "Result should contain 'img name = test.jpg'");
			assertTrue(result.contains("data size = 0"), "Result should contain 'data size = 0'");
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
