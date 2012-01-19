app.get('/:pasteid', function(req, res) {
    loadAccount(req, function(err, account) {
        if(err) console.log(err);
        else {
            turbulence.getPost(req.params.pasteid, function(err, paste) {
                if(err) console.log(err);
                else {
                    if(!paste)
                        console.log('could not find paste');
                    else {
                        res.local('paste', paste);
                        res.local('account', account);
                        res.local('title', 'NodeBin - Paste ' + paste._id);
                        res.render('paste');
                    }
                }
            });
        }
    });
});

app.post('/paste', function(req, res) {
    loadAccount(req, function(err, account) {
        if(err) console.log(err);
        else {
        if(account && account.data.content.username) {
            
            // abuse tags for storing user information
            var paste = {
                authorAgent: account._id,
                visibility: 'public',
                data: {
                    postType: 'post_paste',
                    content: {
                        text: req.body.text,
                        language: 'plaintext'
                    }
                }
            };
            
            turbulence.publishPost(paste, function(err, postId) {
                if(err) {
                    console.log(err.message);
                    res.redirect('/');
                }
                else {
                    paste._id = postId;
                    res.redirect('/');
                }
            });
        }

        } // end first else
    });
});
