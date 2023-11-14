import { SmartContract, state, State, method, PublicKey, Field, DeployArgs, Permissions } from 'o1js';

export class LetterContract extends SmartContract {
  events = {
    'letterSent': PublicKey,
  }

  @state(Field) letters = State<Array<{ sender: PublicKey, receiver: PublicKey, date: Field, content: Field }>>()

  deploy(args: DeployArgs) {
    super.deploy(args)

    const permissionToEdit = Permissions.proof()

    this.account.permissions.set({
      ...Permissions.default(),
      editState: permissionToEdit,
      setTokenSymbol: permissionToEdit,
      send: permissionToEdit,
      receive: permissionToEdit,
    })
  }

  init() {
    super.init()
    this.letters.set([])
  }

  @method sendLetter(receiver: PublicKey, content: Field) {
    const currentLetters = this.letters.getAndAssertEquals()

    const newLetter = {
      sender: this.sender,
      receiver: receiver,
      date: Field(new Date().toISOString()),
      content: content
    }

    this.letters.set([...currentLetters, newLetter])

    this.emitEvent('letterSent', this.sender)
  }
}
