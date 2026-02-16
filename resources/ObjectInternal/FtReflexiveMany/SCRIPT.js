// eslint-disable-next-line no-unused-vars
let customAssociate = ()=>{
	const app = $ui.getAjax();
	const aFtReflexiveMany = app.getBusinessObject('FtReflexiveMany', 'customAssociate_FtReflexiveMany');

	// https://community.simplicite.io/t/association-en-masse-dobjets-lies-par-lien-virtuel/2561/2
	$ui.selectObject(null, aFtReflexiveMany, {selectRows:true}, (FtReflexiveMany)=>{
		// eslint-disable-next-line no-console
		$console.log(JSON.stringify(FtReflexiveMany.selectedIds, null, 4));
	});
};