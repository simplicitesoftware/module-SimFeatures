package com.simplicite.tests.SimFeatures;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Test;

import com.simplicite.util.AppLog;
import com.simplicite.util.BusinessObject;
import com.simplicite.util.Grant;
import com.simplicite.util.exceptions.SaveException;
import com.simplicite.util.exceptions.ValidateException;

/**
 * Unit tests for FtObjInlineChild
 */
public class FtObjInlineChildTest {

	private Grant getGrant() {
		return Grant.getSystemAdmin();
	}

	@Test
	public void testPostCreateUpdatesParentDescription() {
		try {
			String parentName = "Parent_" + System.currentTimeMillis();
			String childName = "Child_" + System.currentTimeMillis();

			// Create parent first
			try (BusinessObject parent = new BusinessObject(getGrant(), "FtObjInlineParent")) {
				parent.withAllAccess()
					.forCreate()
					.withValue("ftObjInlineParentName", parentName)
					.validateAndCreate();
			} catch (ValidateException | SaveException e) {
				AppLog.error("Error creating parent", e);
			}

			String[] parentRow = getGrant().queryFirstColumn(
				"select row_id from ft_obj_inline_parent where ft_objinline_parent_name='" + parentName + "'");
			String parentId = (parentRow != null && parentRow.length > 0) ? parentRow[0] : null;
			AppLog.info(parentId);
			assertNotNull(parentId, "Parent should be created");

			// Create child - postCreate should update parent description
			try (BusinessObject child = new BusinessObject(getGrant(), "FtObjInlineChild")) {
				child.withAllAccess()
					.forCreate()
					.withValue("ftObjInlineChildParentId", parentId)
					.withValue("ftObjInlineName", childName)
					.validateAndCreate();
			} catch (ValidateException | SaveException e) {
				AppLog.error("Error creating child", e);
			}

			// Verify parent description was updated by postCreate
			String[] row = getGrant().queryFirstColumn(
				"select ft_obj_inline_parent_description from ft_obj_inline_parent where row_id=" + parentId);
			String desc = (row != null && row.length > 0) ? row[0] : null;
			assertEquals("Updated by child postCreate", desc,
				"Parent description should be updated by child postCreate");
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}

	@Test
	public void testPostUpdateUpdatesParentDescription() {
		try {
			String parentName = "Parent_" + System.currentTimeMillis();
			String childName = "Child_" + System.currentTimeMillis();

			// Create parent and child
			try (BusinessObject parent = getGrant().getBusinessObject("FtObjInlineParent")) {
				parent.withAllAccess()
					.forCreate()
					.withValue("ftObjInlineParentName", parentName)
					.validateAndCreate();
			}
			String[] parentRow = getGrant().queryFirstColumn(
				"select row_id from ft_obj_inline_parent where ft_objinline_parent_name='" + parentName + "'");
			String parentId = (parentRow != null && parentRow.length > 0) ? parentRow[0] : null;
			String childId = null;
			try (BusinessObject child = new BusinessObject(getGrant(), "FtObjInlineChild")) {
				child.withAllAccess()
					.forCreate()
					.withValue("ftObjInlineChildParentId", parentId)
					.withValue("ftObjInlineName", childName)
					.validateAndCreate();
				childId = child.getObject().getRowId();

				child.withAllAccess()
					.forUpdate(childId)
					.withValue("ftObjInlineName", childName + "_updated")
					.validateAndUpdate();
			} catch (ValidateException | SaveException e) {
				AppLog.error("Error updating child", e);
				fail(e.getMessage());
			}

			// Verify parent description was updated by postUpdate
			String[] row = getGrant().queryFirstColumn(
				"select ft_obj_inline_parent_description from ft_obj_inline_parent where row_id=" + parentId);
			String desc = (row != null && row.length > 0) ? row[0] : null;
			assertEquals("Updated by child postUpdate", desc,
				"Parent description should be updated by child postUpdate");
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
}
