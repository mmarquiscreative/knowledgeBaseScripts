function resetAllSections(){
        var sectionList;
        sectionList = document.querySelectorAll('.sectionText')
        sectionList.forEach(function(cur){
            cur.className = 'hidden sectionText';
        });
    };
    
    function toggleVisibility(targetString){
        document.querySelector(targetString).classList.toggle('hidden');
    };
    
    function displayDiv(event){
        console.log('displayDiv ' + event.target.id);
        switch (event.target.id){
            case 'btn__Designer':
                resetAllSections();
                toggleVisibility('#designerSection');
                break;
            case 'btn__Proofer':
                resetAllSections();
                toggleVisibility('#prooferSection');
                break;
            case 'btn__Copywriter':
                resetAllSections();
                toggleVisibility('#copywriterSection');
                break;
            default:
                console.log('no switch match for ' + event.target.id);
            };
};
    
    function innit(){
        document.querySelector('#revealBtns').addEventListener('click', function(event){
          displayDiv(event);
        });
    };
innit();