describe('The Callipygian Ideal', function() {
    integration(function() {
        describe('when played', function() {
            beforeEach(function() {
                this.setupTest({
                    player1: {
                        amber: 5,
                        house: 'saurian',
                        inPlay: ['troll'],
                        hand: ['the-callipygian-ideal']
                    },
                    player2: {
                        inPlay: ['the-sting'],
                        hand: ['urchin']
                    }
                });

                this.player1.playUpgrade(this.theCallipygianIdeal, this.troll);
            });

            it('should exalt the creature it is attached to', function() {
                expect(this.troll.tokens.amber).toBe(1);
            });

            describe('and the next turn begins', function() {
                beforeEach(function() {
                    this.player1.endTurn();

                    this.player2.clickPrompt('shadows');
                    this.player2.endTurn();
                });

                it('should prompt the forge key prompt', function() {
                    expect(this.player1).toHavePrompt('Which key would you like to forge?');
                });
            });
        });
    });
});
