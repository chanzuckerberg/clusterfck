module.exports = {
  euclidean: function(v1, v2) {
      var total = 0,
          missing_values = 0;
      for (var i = 0; i < v1.length; i++) {
         if (v1[i] == null || v2[i] == null) {
            missing_values += 1;
            continue;
         }
         total += Math.pow(v2[i] - v1[i], 2);
      }
      if (missing_values > 0) {
        if (missing_values == v1.length) {
          total = 9999999999999;
        } else {
          total = total * (v1.length / (v1.length - missing_values));
        }
      }
      return Math.sqrt(total);
   },
   manhattan: function(v1, v2) {
     var total = 0,
          missing_values = 0;

     for (var i = 0; i < v1.length ; i++) {
        if (v1[i] == null || v2[i] == null) {
           missing_values += 1;
           continue;
        }
        total += Math.abs(v2[i] - v1[i]);
     }
     if (missing_values > 0) {
        total = total * (v1.length / (v1.length - missing_values))
     }
     return total;
   },
   max: function(v1, v2) {
     var max = 0;
     for (var i = 0; i < v1.length; i++) {
        max = Math.max(max , Math.abs(v2[i] - v1[i]));
     }
     return max;
   }
};
