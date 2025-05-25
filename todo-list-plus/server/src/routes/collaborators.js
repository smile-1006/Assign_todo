const express = require('express');
const router = express.Router({ mergeParams: true });
const collaboratorController = require('../controllers/collaboratorController');
const auth = require('../middleware/auth');

router.use(auth);

router.post('/:id/collaborators', collaboratorController.addCollaborator);
router.delete('/:id/collaborators', collaboratorController.removeCollaborator);

module.exports = router;
