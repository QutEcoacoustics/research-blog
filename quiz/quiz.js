(function ($) {
    $.fn.animatedswap = function (options) {

        var settings = $.extend({
            'speed': 400,
            'opacity': 0.7,
            'dropevent': null
        }, options);

        var selectedItems = this;

        // to keep otherwise global declaration contained.
        var dragindex;

        $(selectedItems).mouseover(function () {
            $(selectedItems).disableSelection();
            $(selectedItems).droppable({
                drop: function (event, ui) {
                    var dropindex = $(selectedItems).index(this);
                    var dragposition = $(selectedItems[dragindex]).position();
                    var dropposition = $(selectedItems[dropindex]).position();

                    var withDifference = parseInt(dragposition.left) - parseInt(dropposition.left);
                    var heightDifference = parseInt(dragposition.top) - parseInt(dropposition.top);

                    var animationsComplete = 0;

                    $(selectedItems[dropindex]).animate({
                        left: '+=' + withDifference,
                        top: '+=' + heightDifference
                    }, settings.speed, function () {
                        // finished one animation
                        animationsComplete += 1;

                        // when both animations complete
                        // raise event if given in options
                        if (settings.dropevent) {

//                            $('#test').html(
//                                'dragindex: ' + dragindex + ' ' +
//                                'dropindex: ' + dropindex + ' ' +
//                                'dragposition: ' + dragposition + ' ' +
//                                'dropposition: ' + dropposition + ' ' +
//                                'withDifference: ' + withDifference + ' ' +
//                                'heightDifference: ' + heightDifference + ' '
//                                );

                            settings.dropevent(event, ui, {
                                'dragindex': dragindex,
                                'dropindex': dropindex,
                                'animationsComplete': animationsComplete
                            });
                        }
                    });

                    $(selectedItems[dragindex]).animate({
                        left: '+=' + (withDifference * (-1)),
                        top: '+=' + (heightDifference * (-1))
                    }, settings.speed, function () {
                        // finished one animation
                        animationsComplete += 1;

                        // when both animations complete
                        // raise event if given in options
                        if (settings.dropevent) {
                            settings.dropevent(event, ui, {
                                'dragindex': dragindex,
                                'dropindex': dropindex,
                                'animationsComplete': animationsComplete
                            });
                        }
                    });


                }
            });

            $(this).draggable({
                opacity: settings.opacity,
                helper: 'clone',
                containment: 'parent',
                scroll: false,
                drag: function (event, ui) {
                    dragindex = $(selectedItems).index(this);
                }
            });

        });
    };
})(jQuery);

$(document).ready(function () {

    var maxItems = 6;

    /****************************
     * Get json and build UI
     ****************************/

    $.getJSON("resources/data.json", function (data) {

        var shuffledArray = shuffleArray(data.data);

        // truncate to desired length
        shuffledArray.length = Math.max(maxItems, data.data.length);

        // add DOM
        for (var i = 0; i < maxItems; i++) {
            var item = shuffledArray[i];

            var spanStart = '<span animalid="' + item.id + '">';
            var spanEnd = '</span>';

            $('#AnimalName').append(spanStart + item.name + spanEnd);
            $('#AnimalScName').append(spanStart + item.scientificname + spanEnd);

            var photo = '<img src="resources/' + item.folder + '/' + item.imagelocal + '">';
            $('#AnimalPhoto').append(spanStart + photo + spanEnd);

            var spectro = '<img src="resources/' + item.folder + '/' + item.spectrolocal + '">';
            $('#AnimalSpectrogram').append(spanStart + spectro + spanEnd);

            var audioStart = '<audio controls="controls">';
            var audioEnd = '</audio>';
            var mp3 = '<source src="resources/' + item.folder + '/' + item.audiomp3 + '" type="audio/mpeg">';
            var ogg = '<source src="resources/' + item.folder + '/' + item.audioogg + '">';
            $('#AnimalSound').append(spanStart + audioStart + mp3 + ogg + audioEnd + spanEnd);

        }

    });

    /****************************
     * Animated Swap
     ****************************/

    $('div.MatchRow').sortable({
        change: function (event, ui) {

            var AnimalName = getAnimalIdsForRow('AnimalName');
            var AnimalScName = getAnimalIdsForRow('AnimalScName');
            var AnimalPhoto = getAnimalIdsForRow('AnimalPhoto');
            var AnimalSpectrogram = getAnimalIdsForRow('AnimalSpectrogram');
            var AnimalSound = getAnimalIdsForRow('AnimalSound');

            for (var index = 0; index < AnimalName.length; index++) {

                var comparison = AnimalName[index].animalid;

                if (AnimalScName[index].animalid == comparison &&
                    AnimalPhoto[index].animalid == comparison &&
                    AnimalSpectrogram[index].animalid == comparison &&
                    AnimalSound[index].animalid == comparison) {

                    $('span[animalid="' + comparison + '"]').css('background-color', '#CDFECD');
                } else {
                    $('span[animalid="' + comparison + '"]').css('background-color', 'white');
                }
            }
        }
    });
    $('div.MatchRow').disableSelection();

    //$('div.MatchRow span').animatedswap({ 'dropevent': function (event, ui, data) {
    //
    //    if (data.animationsComplete != 2) {
    //        return;
    //    }
    //
    //    var AnimalName = getAnimalIdsForRow('AnimalName');
    //    AnimalName.sort(sortByLeft);
    //
    //    var AnimalScName = getAnimalIdsForRow('AnimalScName');
    //    AnimalScName.sort(sortByLeft);
    //
    //    var AnimalPhoto = getAnimalIdsForRow('AnimalPhoto');
    //    AnimalPhoto.sort(sortByLeft);
    //
    //    var AnimalSpectrogram = getAnimalIdsForRow('AnimalSpectrogram');
    //    AnimalSpectrogram.sort(sortByLeft);
    //
    //    var AnimalSound = getAnimalIdsForRow('AnimalSound');
    //    AnimalSound.sort(sortByLeft);
    //
    //    for (var index = 0; index < AnimalName.length; index++) {
    //
    //        var comparison = AnimalName[index].animalid;
    //
    //        if (AnimalScName[index].animalid == comparison &&
    //            AnimalPhoto[index].animalid == comparison &&
    //            AnimalSpectrogram[index].animalid == comparison &&
    //            AnimalSound[index].animalid == comparison) {
    //
    //            $('span[animalid="' + comparison + '"]').css('background-color', '#CDFECD');
    //        } else {
    //            $('span[animalid="' + comparison + '"]').css('background-color', 'white');
    //        }
    //    }
    //}
    //});

});

function getAnimalIdsForRow(rowId) {
    var ids = [];
    $('#' + rowId + ' span').each(function (index, element) {
        var item = $(this);
        ids.push({'leftpos': item.position().left, 'animalid': item.attr('animalid')});
    });
    return ids;
}

function sortByLeft(a, b) {
    return a.leftpos - b.leftpos;
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}