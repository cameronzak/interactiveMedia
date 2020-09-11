d3.select("#zooBreakout")
    .on("click",function()
    {d3.select("#animalImg")
        .classed("hidden",false);
})

d3.select("#monkey")
    .on("click",function()
    {d3.select("#announcement")
        .text("Lure the monkeys back to their cage using a banana. Click here to use a banana!");
    })

d3.select("#announcement")
    .on("click", function()
{
    d3.select("#monkey")
        .classed("hidden",true)
})

