package com.simplicite.tests.SimFeatures;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

import com.simplicite.util.Grant;
import com.simplicite.util.tools.Parameters;
import com.simplicite.webapp.web.widgets.MermaidExternalObject;

/**
 * Unit tests FtTestMermaidTest
 */
public class FtTestMermaidTest {

	private Grant getGrant() {
		return Grant.getSystemAdmin();
	} 

	@Test
	public void testMermaidChartSpec() {
		MermaidExternalObject mermaidExternalObject = (MermaidExternalObject) getGrant().getExternalObject("FtTestMermaid");
		Parameters params = new Parameters();
		String mermaidChartSpec = mermaidExternalObject.getMermaidChartSpec(params);
		assertNotNull("Mermaid chart spec should not be null", mermaidChartSpec);
	}
}
