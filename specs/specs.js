describe('countUp', function() {
    it('takes an input and displays the count up to that input', function() {
        expect(countUp("1", "3")).to.eql(["1", "2", "3"])
    });

    it('takes an large input and uses an interval > 1 to count up to that input', function() {
        expect(countUp("5", "30")).to.eql(["5", "10", "15", "20", "25", "30"])
    });

    it('takes a large input and uses an interval >1 to count up the closest number not including that input', function() {
        expect(countUp("9", "50")).to.eql(["9", "18", "27", "36", "45"])
    });
});
