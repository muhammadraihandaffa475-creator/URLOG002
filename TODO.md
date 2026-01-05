# TODO: Fix Admin-User Link Sync Issue

## Issues Identified
- E-PERWABKU section in admin.html lacks URL input field, preventing URL saving
- Embed URL format differs between admin.js (pubhtml) and user.js (/embed), causing potential display issues
- Refresh button in user.html is not functional, so user doesn't see updated URLs after admin saves
- Views and lastUpdated statistics are not loaded/displayed in user interface
- Views are not incremented when user switches tabs

## Planned Fixes
- [ ] Add URL input section for E-PERWABKU in admin.html
- [ ] Update admin.js to use /embed URL format instead of pubhtml for consistency
- [ ] Add event listener for refresh button in user.js to reload content
- [ ] Load and display views/lastUpdated statistics in user.js on page load and tab switch
- [ ] Increment views when user switches tabs in user.js
- [ ] Test the synchronization between admin and user interfaces
