app.get('/', function(req, res) {
    loadAccount(req, function(err, account) {
        if(err) {
            console.log(err.message);
        }
        else {
        var pastes_per_page = 100;
        turbulence.queryPost( 
            {}, 
            { sort: [['date', 'descending']], limit: pastes_per_page },
            function(err, pastes) {
                if(err) {
                    console.log(err.message);
                }
                else {
                    console.log(pastes);
                    res.local('pastes', pastes);
                    res.local('account', account);
                    res.local('title', 'NodeBin');
    
                    try {
                        res.render('home');
                    }
                    catch (err) {
                        console.log(err.message);
                    }

                } // end else
        });

        } // end else
    });
});
