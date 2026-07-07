package com.simplicite.tests.SimFeatures;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

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
		mermaidExternalObject.init(params);
		String mermaidChartSpec = mermaidExternalObject.getMermaidChartSpec(params);
		assertNotNull(mermaidChartSpec, "Mermaid chart spec should not be null");
		
		params.setParameter("object", "FtAttributes");
		params.setParameter("inst", "tmp_FtAttributes");
		mermaidChartSpec = mermaidExternalObject.getMermaidChartSpec(params);
		assertTrue(mermaidChartSpec.contains("Attributes"), "Mermaid chart should contain object display");
		
	}
}
