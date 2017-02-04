<?php

    $beerAmount = 250;
    $beerUrl = 'http://35.167.183.0/cgi-bin/save_drink.py?amount=' .$beerAmount;
    $beerQuery = ['amount'=>'250'];

    $response = file_get_contents($beerUrl, http_build_query($beerQuery));
    $result = json_decode($response, true);
    $resultStatus = $result['status'];

    if ($resultStatus !== 'success') {
        echo '{"status":"API Error"}';
    } else {
        echo $resultStatus;
    }
