/**
 * NOTE: This file needs to be loaded, only after app.js.
 *   
 * Prepare data from the supplied portfolio details.
 * and set back to portfolio.
 * 
 * @todo: Below code needs improvements.
 */
portfolio.data = (function(imagesCount, slotSize) {
	var data = [];
	var currentSlotSize = slotSize;
	var currentSlot = -1;
	var iteration = 1;
	while (imagesCount > 0) {
		var imageName = iteration;
		var ob = {
			'thumb' : imageName + ".jpg",
			'zoom' : imageName + ".jpg",
			'content' : ""
		};
		if (!(currentSlotSize < slotSize)) {
			currentSlotSize = 0;
			currentSlot++;
			data[currentSlot] = [];
		}
		data[currentSlot].push(ob);
		currentSlotSize++;
		iteration++;
		imagesCount--;
	}
   // console.log(data);
	return data;
})(portfolio.TotalImages, portfolio.SlotSize);
