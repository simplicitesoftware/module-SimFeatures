package com.simplicite.extobjects.SimFeatures;

import com.simplicite.util.ObjectDB;
import com.simplicite.util.Tool;
import com.simplicite.util.tools.Parameters;

public class FtTestMermaid extends com.simplicite.webapp.web.widgets.MermaidExternalObject {
	private static final long serialVersionUID = 1L;

	@Override
	public String getMermaidChartSpec(Parameters params) {
		String obj = params.getParameter("object");
		if (!Tool.isEmpty(obj)) { // Embedded in a business object
			ObjectDB o = getGrant().getObject(params.getParameter("inst"), obj); // Retrieve current object instance
			return
				"graph LR\n"
				+ "  subgraph \"" + o.getDisplay() + "\"\n"
				+ "    subgraph \"" + o.getFieldValue("appTstCode") + "\"\n"
				+ "      " + o.getRowId() + "\n"
				+ "    end\n"
				+ "  end\n";
		}

		// Default static config
		return super.getMermaidChartSpec(params);
	}
}