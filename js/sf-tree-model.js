var tree = {
  name: "Accounts",
  sobjectType: "Account",
  nodes: [
    { name: "Burlington Textiles", id: "001xxxxxxxxxxxx", hasChildren: true,
      tree: {
        name: "Contacts",
        sobjectType: "Contact",
        nodes: [
          { name: "Joe Contact", id: "", hasChildren: true,
            tree: {
              name: "Cases",
              sobjectType: "Case",
              nodes: [
                { name: "00000000", id: "", hasChildren: false },
                { name: "00000001", id: "", hasChildren: false },
              ]
            }},
          { name: "Mike Contact", id: "", hasChildren: false },
          { name: "Cindy Contact", id: "", hasChildren: false },
        ]
      }},
    { name: "ACME", id: "001xxxxxxxxxxxx", hasChildren: false },
    { name: "GenePoint", id: "001xxxxxxxxxxxx", hasChildren: false }
  ]
}
