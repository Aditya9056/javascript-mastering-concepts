let size = 8

for( i=1; i <= size; i++ ){

    for( j=1; j<=size; j++ ){
        if( i%2 === 0 && j%2 !== 0 ){
            process.stdout.write("#")
        } else if( i%2 !== 0 && j%2 === 0 ){
            process.stdout.write("#")
        } else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}


// -2-4-6-8
// -#-#-#-#
// 1-3-5-7-
// #-#-#-#-

// 1 -> odd places
// 2 -> even places