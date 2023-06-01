// FtReflexiveMany front side hook
((ui)=>{
	const app = ui.getAjax();
	Simplicite.UI.hooks.FtReflexiveMany = (o,cbk)=>{
		try {
			const p = o.locals.ui;
			if (p && o.isMainInstance()) {
				p.form.onload = function(ctn, obj, params) {
					//...
				};
			}
			//...
		} catch (e) {
			app.error("Error in Simplicite.UI.hooks.FtReflexiveMany: " + e.message);
		} finally {
			console.log("FtReflexiveMany hooks loaded.");
			cbk && cbk(); // final callback
		}	
	};
})(window.$ui);


/*(function(ui) {
	if (!ui) return;
	const app = ui.getAjax();
	// Hook called by each object instance
	Simplicite.UI.hooks.FtReflexiveMany = function(o, cbk) {
		try {
			console.log("FtReflexiveMany hooks loading...");
			const p = o.locals.ui;
			if (p && o.isMainInstance()) {
				p.form.onload = function(ctn, obj, params) {
					//...
				};
			}
			//...
		} catch (e) {
			app.error("Error in Simplicite.UI.hooks.FtReflexiveMany: " + e.message);
		} finally {
			console.log("FtReflexiveMany hooks loaded.");
			cbk && cbk(); // final callback
		}
	};
})(window.$ui);*/

let customAssociate = ()=>{
	const app = $ui.getAjax();
	const aFtReflexiveMany = app.getBusinessObject("FtReflexiveMany", "customAssociate_FtReflexiveMany");
	
	// https://community.simplicite.io/t/association-en-masse-dobjets-lies-par-lien-virtuel/2561/2
	$ui.selectObject(null, aFtReflexiveMany, {selectRows:true}, (FtReflexiveMany)=>{
		debugger;
		console.log(JSON.stringify(FtReflexiveMany.selectedIds, null, 4));
		// pour chaque row_id sélectionné créer le lien
		/*$(ids).each((i,id)=>{
			debugger;
			console.log("i="+i+" | id="+id);
		});*/
	});	
};