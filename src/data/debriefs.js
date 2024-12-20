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
  },
  {
    id: 'project-16',
    title: 'Project 16: Casino payout form',
    smiles: [
      `
        It was straightforward to set up the payout form. Documentations were helpful.
      `
    ],
    confusings: [
      `
        Payout disclaimer should be modifiable by the user.
      `,
      `
        We do not have any payment cards to trigger the declined flow for payouts.
      `,
      `
        Negative number for allocation should not be allowed (FE validation needed).
      `,
      `
        Code samples display is quite narrow. Hard to actually read the codes.
      `
    ]
  },
  {
    id: 'project-17',
    title: 'Project 17: Casino payout payment methods',
    smiles: [
      `
        It's more or less the same as we had in project 15. We even copied some of the code.
      `
    ],
    confusings: [
      `
        We didn't manage eCheck to work. It was in ready-to-payout API response, but Instruments don't display it. We also didn't notice the method in the list in payment instruments: https://www.rebilly.com/docs/dev-docs/api/payment-instruments
      `,
      `
        Documentation for Instruments should have list of methods supported.
      `
    ]
  },
  {
    id: 'project-18',
    title: 'Project 18: Add digital wallets to deposit flow',
    smiles: [
      `
        No coding involved.
      `
    ],
    confusings: [
      `
        We didn't find documentation how to configure digital wallets for Instruments.
      `,
      `
        It's not clear that we also need to configure Ready To Pay event in Rules Engine.
      `,
      `
        We should have some links in the documentation how to test Google Pay - had to look for it in other places.
      `,
      `
        Samsung Pay doesn't work at all - even in our interactive example for Framepay.
      `
    ]
  },
  {
    id: 'project-19',
    title: 'Project 19: VIP customers',
    smiles: [
      `
        No coding involved. All changes were possible to be made using only Recomm.
      `
    ],
    confusings: [
      `
        Customer lifetime revenue is calculated after tagging automation happens. So you need to make another transaction before the automation for lifetime revenue is applied. 
      `,
      `
        Adjust ready to pay action in rules engine doesn't add method, but returns the whole list. Therefore the VIP customers, we had to include everything on the RTP list.
      `,
      `
        Instruments bug: Error stating "Deposit request is not started" happens intermittently. This tends to happen when Instrument is loaded twice on the page or the deposit button is clicked twice before the payment screen is loaded.
        <div class="mt-3">
          <img src="/images/project-19/19-1.png" style="max-width: 700px" />
        </div>
      `,
      `
        Instruments bug: After completing the 1st deposit of 5,000 USD. The second time opening the Instruments, it is not longer working (the button are all in active state and the deposit amount field should "NaN").
        <div class="mt-3">
          <img src="/images/project-19/19-2.png" style="max-width: 700px" />
        </div>
      `
    ]
  }
]
