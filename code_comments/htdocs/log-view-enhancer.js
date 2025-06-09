$(document).ready(function($){
	function isLinkToCommentedRevision($link) {
		const href = $link.attr('href');
		const match = href && href.match(/^\/changeset\/([^/]+)\/.*$/);
		if (!match) {
			return false;
		}
		const targetRevision = match[1];
		return CodeCommentsCommentedRevisions.includes(targetRevision);
	}
	const $changesetLinks = jQuery('td.rev a.chgset')
	$changesetLinks.each(function(){
		$link = $(this)
		if (isLinkToCommentedRevision($link)) {
			$link.addClass('chgset-commented');
		}
    });
});
