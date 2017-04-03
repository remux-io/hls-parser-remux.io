/**
*  ____  _____ __  __ _   ___  __  ___ ___
* |  _ \| ____|  \/  | | | \ \/ / |_ _/ _ \
* | |_) |  _| | |\/| | | | |\  /   | | | | |
* |  _ <| |___| |  | | |_| |/  \ _ | | |_| |
* |_| \_\_____|_|  |_|\___//_/\_(_)___\___/
*
**/

'use strict';


var hls_parse_class = function(){
    var hls_parser = this;

    hls_parser.parsers = {}
    hls_parser.parsers.tags = /(?!\#EXTINF)(\#.*)\:(.*)|(?!\#EXTINF)(\#.*)/gm
    hls_parser.parsers.chunks = /(\#EXTINF)\:(.*)?\,.*\n^(?!\#)(.*)/gm


    hls_parser.parse = function (playlist){

        var result = {
            chunks:[]
        }

        var m = null;
        while (m = hls_parser.parsers.tags.exec(playlist)){
            result[m[1] || m[0]] = m[2] || true;
        }

        while (m = hls_parser.parsers.chunks.exec(playlist)){
            result.chunks.push({'chunk':m[3], 'duration':m[2], 'ctime':new Date().getTime()})
        }

        return result
    }


}

module.exports = hls_parse_class
