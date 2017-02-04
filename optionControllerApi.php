<?php
    $mirror  = $_GET['mirror'];
    $sound   = $_GET['sound'];

    shell_exec('gpio -g mode 17 out > /dev/null 2>&1 &');

    if ($mirror === 'on' && $sound === 'on') {
        shell_exec('gpio -g write 17 1 > /dev/null 2>&1 &');
        exec("ps aux | grep aplay", $output, $result);
        if (count($output) < 3) {
            shell_exec('aplay /home/pi/c3.wav > /dev/null 2>&1 &');
            shell_exec('gpio -g write 17 1 > /dev/null 2>&1 &');

            echo '{"status":"success","code":{"mirror":"on","sound":"on"}}';
        }
    } elseif ($mirror === 'on' && $sound === 'off') {
        shell_exec('killall all > /dev/null 2>&1 &');
        shell_exec('gpio -g write 17 1 > /dev/null 2>&1 &');

        echo '{"status":"success","code":{"mirror":"on","sound":"off"}}';
    } elseif ($mirror === 'off' && $sound === 'on') {
        shell_exec('gpio -g write 17 1 > /dev/null 2>&1 &');
        exec("ps aux | grep aplay", $output, $result);
        if (count($output) < 3) {
            shell_exec('aplay /home/pi/c3.wav > /dev/null 2>&1 &');
            shell_exec('gpio -g write 17 0 > /dev/null 2>&1 &');

            echo '{"status":"success","code":{"mirror":"off","sound":"on"}}';
        }
    } elseif ($mirror === 'off' && $sound === 'off') {
        shell_exec('killall aplay > /dev/null 2>&1 &');
        shell_exec('gpio -g write 17 0 > /dev/null 2>&1 &');

        echo '{"status":"success","code":{"mirror":"off","sound":"off"}}';
    } else {
        echo '{"status":"failed"}';
    }
