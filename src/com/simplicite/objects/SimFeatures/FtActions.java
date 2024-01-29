package com.simplicite.objects.SimFeatures;

import java.util.*;

import com.simplicite.util.*;
import com.simplicite.util.exceptions.*;
import com.simplicite.util.tools.*;
import com.simplicite.util.engine.JobQueue;
import com.simplicite.util.engine.Platform;
import java.io.File;

/**
 * Business object FtActions
 */
public class FtActions extends ObjectDB {
	private static final long serialVersionUID = 1L;
	
	public String asyncAction(){
		return "to implement in v6.0";
	}
	
	/* =========V6===========
	
	<?xml version="1.0" encoding="UTF-8"?>
	<simplicite xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.simplicite.fr/base" xsi:schemaLocation="http://www.simplicite.fr/base https://www.simplicite.io/resources/schemas/base.xsd">
	<object>
		<name>Action</name>
		<action>update</action>
		<data>
			<act_name>AsyncAction</act_name>
			<act_async>1</act_async>
			<act_queue_id.acq_name>AppQueue</act_queue_id.acq_name>
		</data>
	</object>
	</simplicite>

	
	
	private static final int STEPS = 10;
	
	// Synchronous action launched by the UI with internal asynchronous Job
	public String asyncAction(Action action, AsyncTracker tracker) {
		// Already running ?
		if (tracker.isRunning())
			return null;
			
		// init tracker
		tracker.setProgress(0);
		tracker.setMinifiable(true);
		tracker.start();
		
		JobQueue.push("asyncActionJob", new Runnable() {
			@Override
			public void run() {
				try {
					tracker.add("asyncAction has started");
					
					for(int i=1; i<=STEPS; i++){
						tracker.push("Job "+i);
						tracker.message("Sleep 1 second in job "+i);
						Thread.sleep(1000);
						tracker.pop("Job "+i+" done");
						tracker.setProgress(100*i/STEPS);
					}
					
					tracker.addFile("Download file", getExampleContentFileUrl());
				}
				catch (InterruptedException e) {
					tracker.message("Interrupted");
					Thread.currentThread().interrupt();
				}
				catch (Exception e) {
					// Assign the error on current task
					tracker.error(e.getMessage());
				}
				finally {
					tracker.stop();
				}
			}
		});
		return null; // UI will displays a dialog with the tracking data
	}
	
	private static String getExampleContentFileUrl() throws Exception{
		File f = FileTool.getRandomFile(Platform.getContentDir() + "/tmp", "async-file", "txt");
		if(!FileTool.writeFile(f, "File content"))
			throw new Exception("could not write file");
		return HTMLTool.getContentURL(f);
	}*/
}
