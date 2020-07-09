/* GET 'about' page */
const about = function(req, res) {
    res.render('generic-text', { 
      title: 'About Loc8r',
      content: 'Loc8r was created to help people find places to sit down and get a vit of work done.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi earum, autem optio amet perspiciatis assumenda soluta ullam obcaecati facere similique pariatur quas tenetur debitis quaerat laboriosam dicta eaque numquam!' 
    });
  }; 