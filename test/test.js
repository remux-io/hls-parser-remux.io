var p = '#EXTM3U\n\
#EXT-X-VERSION:3\n\
#EXT-X-TARGETDURATION:5\n\
#EXT-X-MEDIA-SEQUENCE:1862\n\
#EXTINF:3.837167,\n\
file112.ts\n\
#EXTINF:3.837167,\n\
file113.ts'


var tags = /(?!\#EXTINF)(\#.*)\:(.*)|(?!\#EXTINF)(\#.*)/gm
var chunk = /(\#EXTINF)\:(.*)?\,.*\n^(?!\#)(.*)/gm
// var x = /((\#EXTINF)\:(.*)).*?\n(.*?)$|^(\#.*)\:(?:(.*)[\,]$|(.*)$)/gm
// var x = /^(\#.*)(?:\:([^,].*)(?!\n^(?!\#))|\:([^,].*).*\n(.*))/gm
// var x = /(?:(?:(\#EXTINF)\:(.*)?\,.*\n(.*)|(\#.*)?[\:](.*)$)|^(\#.*))/gm
// var x = /(?:(\#EXTINF)\:(.*)?\,.*\n(.*)|(\#.*)?[\:](.*)$)/gm
// var x = /(?:^(\#EXTINF)\:(.*)?\,*\n(.*)|^(\#.*)\:(.*)|^(\#.*))/gm
//(\#EXTINF)\:(.*)\,.*\n(.*)


while (m = tags.exec(p)){
    console.log('------------------------');
    console.log(m[1] || m[0], m[2] || true);
}

    console.log('------------------------');
    console.log('------------------------');
    console.log('------------------------');

while (m = chunk.exec(p)){
    console.log('------------------------');
    console.log(m[1], m[2], m[3]);
}



// console.log(p.match(pars));
// console.log(p.match(pars));
