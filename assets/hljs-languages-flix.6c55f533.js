var e=function(e){const n={className:"function",beginKeywords:"def",end:/[:={\[(\n;]/,excludeEnd:!0,contains:[{className:"title",relevance:0,begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/}]};return{name:"Flix",keywords:{literal:"true false",keyword:"case class def else enum if impl import in lat rel index let match namespace switch type yield with"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},{className:"string",variants:[{begin:'"',end:'"'}]},n,e.C_NUMBER_MODE]}};export{e as f};
