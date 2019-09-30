
class Filter {
    constructor() {
        this.filters = $(".filters");
        this.camps = $(".camps");
        this.camp = $(".camp");
        this.currentFilters = new Map();
        this.currentFilteredCamps = $();
        this.noFound = $(".hidden");
        this.noResult = $(".no_result");
        this.inputRadio = $("input:radio");
        
        this.camp.each(function() {
            $(this).append(`<p>${this.dataset.val}</p>`)
        })


        this.filters.on("click", ".filter", (e) => {

            let target = e.target.name,
                value = e.target.value;
              
                    if (value == "clear" ){
                        this.currentFilters.delete(target);
                        this.camp.addClass("show");
                        this.showCamps();
                        $(`input[name='${target}']`).prop("checked", false)
                        
                    } else if (value == "clear_all") {
                        this.currentFilters.clear();
                        this.camp.addClass("show");
                        this.noResult.css("visibility", "hidden");
                        this.inputRadio.prop("checked", false)
                    } else {
                        this.camp.addClass("show");
                        this.currentFilters.set(target, value);
                        this.showCamps();
                        e.target.setAttribute("checked", true)
                    
                    }
         } )
   }


   showCamps() {

    this.noResult.css("visibility", "hidden");
  
            for (let value of this.currentFilters.values()) {
                      
               let showedCamps = $(".show");
               
                showedCamps.each(function() {
            
                    let values = this.dataset.val.split(" "),
                    valuseSet = new Set(values);
               
                    if (!valuseSet.has(value)){

                        $(this).removeClass("show")
                        }
                    }
                );
         };
           
         let showedCamps = $(".show");

         if (showedCamps.length == 0) {
             this.noResult.css("visibility", "visible");
         }
               
    }

}
    

const filtrowanie = new Filter();