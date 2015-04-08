/*******************************************************************************
  FalseColorPyramid - creates an image URL pyramid based on the output of the 
  ecosonds.org tile generator

  @author Anthony Truskinger  

  Originally derived from ImgcnvPyramid by Dmitry Fedorov  <fedorov@ece.ucsb.edu>   

*******************************************************************************/

function formatInt(n, pad) {
    var s = n.toString();
    while (s.length<pad)
        s = '0'+s;
    return s;
};   


function FalseColorLevel( width, height, tilesize, level, scale ) {
    this.width = width;
    this.height = height;
    this.xtiles = Math.ceil( width / tilesize );
    this.ytiles = Math.ceil( height / tilesize );
    this.level = level;
    this.scale = scale;
}

FalseColorLevel.prototype.tiles = function() {
    return this.xtiles * this.ytiles;
};

function FalseColorPyramid( levelSpec, tilesize ) {
    var levels = levelSpec.sort(function(a, b) {
        return a.level - b.level;
    });

    this.width = levelSpec[0].width;
    this.height = levelSpec[0].height;
    this.tilesize = tilesize;
    this._pyramid = [];
    
    var min_size = (tilesize / 2) + 1;
    for (var i = 0; i < levels.length; i++) {
        var currentLevelSpec = levels[i];
        var level = new FalseColorLevel(currentLevelSpec.width, currentLevelSpec.height, tilesize, i, currentLevelSpec.scale);
        this._pyramid.push(level);

    }

    this._pyramid.reverse();
    
    this.length = this._pyramid.length;
    this.levels = this._pyramid.length;
}

FalseColorPyramid.prototype.getMaxLevel = function() {
    return this.levels - 1;    
};

FalseColorPyramid.prototype.getLevel = function( level ) {
    if (level<this._pyramid.length)
        return this._pyramid[ level ];    
    else
        return this._pyramid[ this._pyramid.length-1 ];          
};

FalseColorPyramid.prototype.tiles_upto_level = function( level ) {
    var tiles = 0;
    for (var i = 0; i < level; i++) {
        tiles = tiles + this._pyramid[i].tiles();
    }
    return tiles;
};

FalseColorPyramid.prototype.tiles = function() {
    return this.tiles_upto_level( this.levels );
};

FalseColorPyramid.prototype.tile_index = function( level, x_coordinate, y_coordinate ) {
    return x_coordinate + y_coordinate * this._pyramid[ level ].xtiles + this.tiles_upto_level( level );
};

FalseColorPyramid.prototype.tile_filename = function( level, x_coordinate, y_coordinate ) {
    var l = formatInt( this.getLevel(level).level , 5);
    var x = formatInt(x_coordinate, 5);
    var y = formatInt(y_coordinate, 5);    
    return "" + l + "_" + x + "_" + y + ".png";//?"+level;    
};

