export const debriefs = [
  {
    id: 'project-13',
    title: 'Project 13: Casino deposit payment methods',
    smiles: [
      `
        Some confusions aside, it was straightforward to set up the payment methods.
      `,
      `
        Top result for searching for <code>payment method</code> in Rebilly returns the RTP API doc, which is what we were looking for.
      `
    ],
    confusings: [
      `
        The payment payment dropdown in the gateway account set up page has multiple options for bank transfer,
        i.e. <code>bank-transfer-1</code>, <code>bank-transfer-2</code>, <code>bank-transfer-3</code>, etc.
        This is super confusing and it's not clear what the difference is between them.
        There should be a UI element here that explains the different options and when to use them.
        <div class="mt-3">
          <img src="/images/project-13/d1.png" style="max-width: 400px" />
        </div>
      `,
      `
        Finding information about payment method in Rebilly search function is difficult.
        All the top results upon searching for <code>payment method</code> are linking to the repeated content in the blog posts.
        The search should be improved to show the most relevant information first and to ignore specific repeated marketing content in blog posts.
        <div class="mt-3">
          <img src="/images/project-13/d2.png" style="max-width: 700px" />
        </div>
      `,
      `
        The text <em>"After confirmation, you will be prompted to complete your purchase securely."</em> seems out of place. 
        Specifically the word "confirmation" is not clear as to confirms what exactly.
        <div class="mt-3">
          <img src="/images/project-13/d3.png" style="max-width: 700px" />
        </div>
      `
    ]
  }
]
