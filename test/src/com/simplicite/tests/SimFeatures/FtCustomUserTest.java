package com.simplicite.tests.SimFeatures;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.Test;

import com.simplicite.objects.SimFeatures.FtCustomUser;
import com.simplicite.util.Globals;
import com.simplicite.util.Grant;
import com.simplicite.util.GrantCore;
import com.simplicite.util.ObjectField;

/**
 * Unit tests for FtCustomUser
 */
public class FtCustomUserTest {

	/**
	 * Get a system administrator Grant instance for testing purposes.
	 */
	private Grant getGrant() {
		return Grant.getSystemAdmin();
	}

	/**
	 * Test that postLoad sets a default search spec filtering by ft_usr_type and hides the specified fields
	 */
	@Test
	public void testPostLoad() {
		try {
			FtCustomUser user = (FtCustomUser) getGrant().getTmpObject("FtCustomUser");
			user.postLoad();

			// Get the generated default search spec
			String searchSpec = user.getDefaultSearchSpec();
			assertNotNull(searchSpec);
			// Assert that searchSpec contains ft_usr_type and "is not null"
			assertTrue("Default search spec should filter by ft_usr_type",
				searchSpec.contains("ft_usr_type") && searchSpec.contains("is not null"));

			// List of fields that should be hidden after postLoad
			String[] hiddenFields = {
				"usr_first_name", "usr_last_name", "usr_image_id", "usr_lang",
				"usr_cell_num", "usr_active", "usr_home_id", "row_module_id"
			};
			// Assert that each field's visibility is set to HIDDEN
			for (String fieldName : hiddenFields) {
				assertEquals("Field " + fieldName + " should be hidden",
					ObjectField.VIS_HIDDEN, user.getField(fieldName).getVisibility());
			}
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}

	@Test
	public void testPreValidate() {
		try {
			FtCustomUser user = (FtCustomUser) getGrant().getTmpObject("FtCustomUser");
			// Set necessary values for validation
			user.setFieldValue("usr_login", "testuser_" + System.currentTimeMillis());
			user.setFieldValue("usr_email", "test@example.com");
			user.setFieldValue("ftUsrType", "FT_READ");

			// Call preValidate, which should set usr_active
			user.preValidate();

			String usrActive = user.getFieldValue("usr_active");
			assertNotNull("usr_active should be set", usrActive);
			assertEquals("usr_active should be USER_ACTIVE",
				GrantCore.USER_ACTIVE, usrActive);
			// Check that row_module_id is not null or empty
			String rowModuleId = user.getFieldValue("row_module_id");
			assertNotNull("row_module_id should be set", rowModuleId);
			assertFalse("row_module_id should not be empty", rowModuleId.isEmpty());
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}

	/**
	 * Test postSave automatically assigns appropriate responsibilities and updates them on change.
	 * - User is created with FT_READ, then changed to FT_ADMIN: verifies responsibility attribution/removal.
	 */
	@Test
	public void testPostSave() {
		try {
			FtCustomUser user = (FtCustomUser) getGrant().getTmpObject("FtCustomUser");
			String login = "testuser_" + System.currentTimeMillis();
			user.setFieldValue("usr_login", login);
			user.setFieldValue("usr_email", "test@example.com");
			user.setFieldValue("ftUsrType", "FT_READ");

			// Create user and validate; postSave should apply responsibility
			user.getTool().validateAndCreate();

			// Initialize a Grant for the new user
			Grant g = new Grant();
			g.init(login, "testSessionId", Globals.ENDPOINT_UI, null, null);
			// User should have FT_READ responsibility
			assertTrue("Grant should have FT_READ responsibility", g.hasResponsibility("FT_READ"));

			// Change ftUsrType to FT_ADMIN and update; postSave should update responsibilities
			user.setFieldValue("ftUsrType", "FT_ADMIN");
			user.getTool().validateAndUpdate();
			// Refresh the grant context
			g.reinit();
			// User should now have FT_ADMIN but not FT_READ
			assertTrue("Grant should have FT_ADMIN responsibility", g.hasResponsibility("FT_ADMIN"));
			assertFalse("Grant should not have FT_READ responsibility", g.hasResponsibility("FT_READ"));
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
}
